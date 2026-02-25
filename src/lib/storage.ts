// Supabase Storage utilities for file uploads
import { supabase } from "@/integrations/supabase/client";

export type UploadResult = {
  success: boolean;
  url?: string;
  error?: string;
};

/**
 * Upload a file to Supabase Storage
 * @param file - The file to upload
 * @param bucket - Storage bucket name (e.g., 'student-documents', 'student-photos')
 * @param folder - Optional folder path within bucket
 * @returns Upload result with public URL or error
 */
export async function uploadFile(
  file: File,
  bucket: string,
  folder?: string
): Promise<UploadResult> {
  try {
    // Generate unique filename to avoid conflicts
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
    const filePath = folder ? `${folder}/${fileName}` : fileName;

    // Upload file
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (error) {
      console.error("Upload error:", error);
      return { success: false, error: error.message };
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from(bucket)
      .getPublicUrl(data.path);

    return {
      success: true,
      url: urlData.publicUrl,
    };
  } catch (error: any) {
    console.error("Upload exception:", error);
    return {
      success: false,
      error: error.message || "Failed to upload file",
    };
  }
}

/**
 * Delete a file from Supabase Storage
 * @param url - The public URL of the file to delete
 * @param bucket - Storage bucket name
 */
export async function deleteFile(
  url: string,
  bucket: string
): Promise<boolean> {
  try {
    // Extract file path from URL
    const urlParts = url.split(`/storage/v1/object/public/${bucket}/`);
    if (urlParts.length < 2) return false;

    const filePath = urlParts[1];

    const { error } = await supabase.storage.from(bucket).remove([filePath]);

    if (error) {
      console.error("Delete error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Delete exception:", error);
    return false;
  }
}

// Storage bucket names - centralized for consistency
export const STORAGE_BUCKETS = {
  STUDENT_PHOTOS: "student-photos",
  STUDENT_DOCUMENTS: "student-documents",
} as const;
