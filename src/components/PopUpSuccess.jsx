function PopUpSuccess({ onDownload, title, message, buttonText }) {
    return (
        <div className="fixed inset-0 bg-[#101524]/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6 text-center">
                <h2 className="text-lg font-bold text-gray-900 mb-2">{title}</h2>
                <p className="text-sm text-gray-700 mb-6">{message}</p>
                <div className="flex item-center justify-center">
                    <div className="w-[150px]">
                        <button
                            onClick={onDownload}
                            className="w-full bg-[#101524] text-white py-2 rounded-md font-semibold hover:bg-gray-900"
                        >
                            {buttonText}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUpSuccess;
