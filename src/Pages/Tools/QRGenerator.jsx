import React from 'react'
import QRSizeSlider from '../../components/QRGenerator/QRSizeSlider'
import ErrorCorrection from '../../components/QRGenerator/ErrorCorrection'
import ForegroundColor from '../../components/QRGenerator/ForegroundColor'
import BackgroundColor from '../../components/QRGenerator/BackgroundColor'
import SetQRMargin from '../../components/QRGenerator/SetQRMargin'
import SetCornerStyle from '../../components/QRGenerator/SetCornerStyle'

const QRGenerator = () => {
    return (
        <div className='shadow-md p-3 rounded-md bg-white flex '>
            <div className='shadow-xs p-3 flex-1'>
                <div className='flex flex-col gap-3'>
                    {/* input area */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-md font-semibold">1. Enter Content</h3>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-purple-400 transition h-20 resize-none "
                            name=""
                            placeholder="Type or paste your text here..."
                            id=""
                        ></textarea>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold">2. Customize Your QR Code</h3>
                        <div>
                            <div className="flex my-2 gap-3">
                                {/* side slider with size label and px values */}
                                <QRSizeSlider />

                                {/* error correction dropdown low med high */}
                                <ErrorCorrection />

                            </div>
                            <div className="flex my-2 gap-3">
                                {/* foreground color picker */}
                                <ForegroundColor />
                                {/* background color picker */}
                                <BackgroundColor />
                                {/* corner style with three options */}
                                <SetCornerStyle />
                            </div>
                            <div className="flex my-2 gap-3">
                                {/* margin with label and px values */}
                                <SetQRMargin />


                            </div>
                        </div>
                        {/* advance options */}
                        <div></div>
                    </div>
                </div>
                <div className=''>

                </div>
            </div >
            <div className='shadow-xs p-3 flex-1'>

            </div>
        </div >
    )
}

export default QRGenerator