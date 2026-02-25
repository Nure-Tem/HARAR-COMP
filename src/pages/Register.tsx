import { Layout } from "@/components/layout/Layout";
import { useState } from "react";

const Register = () => {
  const [photoPreview, setPhotoPreview] = useState<string>("");
  const [documents, setDocuments] = useState<File[]>([]);

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setDocuments((prev) => [...prev, ...files]);
  };

  const removeDocument = (index: number) => {
    setDocuments((prev) => prev.filter((_, i) => i !== index));
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext || '')) return '🖼️';
    if (['mp4', 'avi', 'mov', 'wmv'].includes(ext || '')) return '🎥';
    if (['mp3', 'wav', 'ogg', 'm4a'].includes(ext || '')) return '🎵';
    if (['pdf'].includes(ext || '')) return '📕';
    if (['doc', 'docx'].includes(ext || '')) return '📘';
    return '📄';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-amber-50 to-green-50 py-12 px-4">
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white/90 p-8">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-amber-400 flex items-center justify-center text-4xl">
                🎓
              </div>
              <div>
                <h1 className="text-3xl font-bold">Student Registration</h1>
                <p className="text-blue-100 mt-2">Join Harar Senior Secondary School - Excellence in Education</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 space-y-6">
            {/* Photo Upload */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border-2 border-amber-300 shadow-md">
              <h2 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                📸 Student Photo
              </h2>
              <div className="flex items-center gap-6">
                {photoPreview ? (
                  <div className="relative">
                    <img src={photoPreview} alt="Preview" className="w-32 h-32 rounded-full object-cover border-4 border-amber-400 shadow-xl" />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 rounded-full p-2">
                      <span className="text-white/90 text-xl">✓</span>
                    </div>
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full bg-amber-200 border-4 border-dashed border-amber-400 flex items-center justify-center text-5xl">
                    👤
                  </div>
                )}
                <div className="flex-1">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handlePhotoChange}
                    className="w-full p-3 border-2 border-amber-300 rounded-lg bg-slate-50 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-amber-500 file:text-white/90 hover:file:bg-amber-600"
                  />
                  <p className="text-sm text-amber-700 mt-2">Upload a clear passport-size photo (JPG, PNG)</p>
                </div>
              </div>
            </div>

            {/* Multiple Files Upload */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-2 border-green-300 shadow-md">
              <h2 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
                📁 Upload Documents, Videos, Audio Files
              </h2>
              <input 
                type="file" 
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.mp4,.avi,.mov,.mp3,.wav,.ogg"
                onChange={handleDocumentChange}
                className="w-full p-3 border-2 border-green-300 rounded-lg bg-slate-50 cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-green-600 file:text-white/90 hover:file:bg-green-700"
              />
              <p className="text-sm text-green-700 mt-2">
                Accepted: Documents (PDF, DOC), Photos (JPG, PNG), Videos (MP4, AVI, MOV), Audio (MP3, WAV)
              </p>
              
              {documents.length > 0 && (
                <div className="mt-4 space-y-2">
                  <p className="font-semibold text-green-900">Uploaded Files ({documents.length}):</p>
                  {documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border-2 border-green-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center text-2xl">
                          {getFileIcon(doc.name)}
                        </div>
                        <div>
                          <span className="text-sm font-medium text-gray-800">{doc.name}</span>
                          <p className="text-xs text-gray-500">{(doc.size / 1024).toFixed(1)} KB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeDocument(index)}
                        className="h-8 w-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center text-red-600 font-bold"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Personal Information */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300 shadow-md">
              <h2 className="text-xl font-bold text-blue-900 mb-6 flex items-center gap-2">
                👤 Personal Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">First Name *</label>
                  <input type="text" required className="w-full p-3 border-2 border-blue-300 rounded-lg bg-slate-50 focus:border-blue-500 focus:outline-none" placeholder="Enter first name" />
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Last Name *</label>
                  <input type="text" required className="w-full p-3 border-2 border-blue-300 rounded-lg bg-slate-50 focus:border-blue-500 focus:outline-none" placeholder="Enter last name" />
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Date of Birth *</label>
                  <input type="date" required className="w-full p-3 border-2 border-blue-300 rounded-lg bg-slate-50 focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Gender *</label>
                  <select required className="w-full p-3 border-2 border-blue-300 rounded-lg bg-slate-50 focus:border-blue-500 focus:outline-none">
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Grade Applying For *</label>
                  <select required className="w-full p-3 border-2 border-blue-300 rounded-lg bg-slate-50 focus:border-blue-500 focus:outline-none">
                    <option value="">Select grade</option>
                    <option value="9">Grade 9</option>
                    <option value="10">Grade 10</option>
                    <option value="11">Grade 11</option>
                    <option value="12">Grade 12</option>
                  </select>
                </div>
                <div>
                  <label className="block text-blue-900 font-semibold mb-2">Previous School</label>
                  <input type="text" className="w-full p-3 border-2 border-blue-300 rounded-lg bg-slate-50 focus:border-blue-500 focus:outline-none" placeholder="School name" />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-blue-900 font-semibold mb-2">Address</label>
                <textarea rows={3} className="w-full p-3 border-2 border-blue-300 rounded-lg bg-slate-50 focus:border-blue-500 focus:outline-none" placeholder="Full address"></textarea>
              </div>
            </div>

            {/* Parent Information */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-2 border-purple-300 shadow-md">
              <h2 className="text-xl font-bold text-purple-900 mb-6 flex items-center gap-2">
                👨‍👩‍👧 Parent/Guardian Information
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-purple-900 font-semibold mb-2">Parent/Guardian Name *</label>
                  <input type="text" required className="w-full p-3 border-2 border-purple-300 rounded-lg bg-slate-50 focus:border-purple-500 focus:outline-none" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-purple-900 font-semibold mb-2">Parent/Guardian Phone *</label>
                  <input type="tel" required className="w-full p-3 border-2 border-purple-300 rounded-lg bg-slate-50 focus:border-purple-500 focus:outline-none" placeholder="+251 XXX XXX XXX" />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white/90 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                ✅ Submit Registration
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                * Required fields. Your application will be reviewed within 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
