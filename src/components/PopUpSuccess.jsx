

function PopUpSuccess({ onClose, onDownload }) {
    return (
        <div className="fixed inset-0 bg-[#101524]/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 text-center">
                <h2 className="text-lg font-bold text-gray-900 mb-2">
                    Selamat Anda Berhasil Terdaftar di <br /> SMAS Kristen Bethel Jakarta
                </h2>
                <p className="text-sm text-gray-700 mb-6">
                    Data pendaftaran Anda telah kami terima dan akan segera diproses oleh tim administrasi.
                    Silakan unduh bukti pendaftaran sebagai arsip pribadi Anda.
                </p>
                <div className="flex justify-center gap-4">
                    <div className="w-[150px]">
                        <button
                            onClick={onDownload}
                            className="w-full bg-[#101524] text-white py-2 rounded-md font-semibold hover:bg-gray-900"
                        >
                            Download Bukti
                        </button>
                    </div>
                    <div className="w-[150px]">
                        <button
                            onClick={onClose}
                            className="w-full bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600"
                        >
                            Selesai
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default PopUpSuccess;
