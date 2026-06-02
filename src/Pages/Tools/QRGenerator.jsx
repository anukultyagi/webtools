import React, { useEffect, useRef, useState } from 'react'
import QRSizeSlider from '../../components/QRGenerator/QRSizeSlider'
import ErrorCorrection from '../../components/QRGenerator/ErrorCorrection'
import ForegroundColor from '../../components/QRGenerator/ForegroundColor'
import BackgroundColor from '../../components/QRGenerator/BackgroundColor'
import SetQRMargin from '../../components/QRGenerator/SetQRMargin'
import SetCornerStyle from '../../components/QRGenerator/SetCornerStyle'
import QRCodeStyling from 'qr-code-styling'
import { FaCircle } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { IoImageOutline } from "react-icons/io5";
import { MdContentCopy } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { SiSvg } from "react-icons/si";
import { FaRegSquare } from "react-icons/fa6";
import { FaVectorSquare } from "react-icons/fa";
import { TbBorderCornerSquare } from "react-icons/tb";
import { FaRegSquareFull } from "react-icons/fa6";




const QRGenerator = () => {

    const [QrCodeInput, setQrCodeInput] = useState("Hakuna Matata")
    const [qrWidth, setQrWidth] = useState(259)
    const [forGroundColor, setForGroundColor] = useState("#000")
    const [backgroundColor, setBackgroundColor] = useState("#fff")
    const [cornerStyle, setCornerStyle] = useState("rounded")
    const [downloadExtension, setDownloadExtension] = useState("png")

    const previewContainerRef = useRef(null);
    const qrCodeRef = useRef(null);

    const downloadHandler = (extension) => {
        qrCodeRef.current?.download({
            extension, name: "custom-qr-code"
        });
    }

    useEffect(() => {

        qrCodeRef.current = new QRCodeStyling({
            width: qrWidth,
            height: qrWidth,
            margin: 10,
            type: "svg",
            data: QrCodeInput,
            image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg", // Logo in center
            dotsOptions: {
                color: forGroundColor,
                type: cornerStyle,  // "dots" | "rounded" | "classy" | "square"
            },
            backgroundOptions: {
                color: backgroundColor,
            },
            imageOptions: {
                crossOrigin: "anonymous",
                margin: 5,
            }
        });

        if (previewContainerRef.current) {
            qrCodeRef.current.append(
                previewContainerRef.current
            )
        }
    }, []);

    useEffect(() => {
        qrCodeRef.current?.update({
            width: qrWidth,
            height: qrWidth,
            margin: 10,

            data: QrCodeInput,

            dotsOptions: {
                color: forGroundColor,
                type: cornerStyle,
            },

            backgroundOptions: {
                color: backgroundColor,
            },
        });
    }, [
        QrCodeInput,
        qrWidth,
        forGroundColor,
        backgroundColor,
        cornerStyle,
    ]);

    return (<>

        <div className=' p-3 flex gap-4'>
            <div className='shadow-xs p-3 flex-1 bg-white rounded-lg'>
                <div className='flex flex-col gap-3'>
                    {/* input area */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-md font-semibold">1. Enter Content</h3>
                        <textarea
                            className="w-full border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-1 focus:ring-purple-400 transition h-20 resize-none text-sm "
                            name=""
                            placeholder="Type or paste your text here..."
                            id=""
                            value={QrCodeInput}
                            onChange={(e) => setQrCodeInput(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <h3 className="text-md font-semibold">2. Customize Your QR Code</h3>
                        <div>
                            <div className="flex my-2 gap-3">
                                {/* side slider with size label and px values */}
                                <QRSizeSlider setQrWidth={setQrWidth} value={qrWidth} />
                                {/* foreground color picker */}
                                <div className="rounded-lg flex flex-col gap-2 w-full">
                                    <span className='text-sm'>Foreground Color</span>

                                    <div className="w-full flex items-center gap-2 border border-gray-300 rounded-md pl-4">
                                        <input
                                            type="color"
                                            value={forGroundColor}
                                            onChange={(e) => setForGroundColor(e.target.value)}
                                            className="w-8 h-8 p-0 border-none cursor-pointer"
                                        />

                                        <span className="text-sm text-zinc-700">{forGroundColor}</span>
                                    </div>
                                </div>
                                {/* background color picker */}
                                <div className="rounded-lg flex flex-col gap-2 w-full">
                                    <span className='text-sm'>Background Color</span>

                                    <div className="w-full flex items-center gap-2 border border-gray-300 rounded-md pl-4">
                                        <input
                                            type="color"
                                            value={backgroundColor}
                                            onChange={(e) => setBackgroundColor(e.target.value)}
                                            className="w-8 h-8 p-0 border-none cursor-pointer"
                                        />

                                        <span className="text-sm text-zinc-700">{backgroundColor}</span>
                                    </div>
                                </div>

                            </div>
                            <div className="flex my-2 gap-3">
                                {/* corner style with three options */}
                                <div className="rounded-lg w-full ">
                                    <span className='text-sm'>SetCornerStyle</span>
                                    <div className="flex gap-2 p-2">
                                        <button className="pl-2 pr-2 p-1 border rounded-sm cursor-pointer hover:bg-zinc-100 border-purple-600" value="square"
                                            onClick={(e) => setCornerStyle(e.target.value)}
                                        >
                                            <FaRegSquareFull className="text-2xl" />
                                        </button>
                                        <button className="pl-2 pr-2 p-1 border rounded-sm cursor-pointer hover:bg-zinc-100 border-purple-600" value="rounded"
                                            onClick={(e) => setCornerStyle(e.target.value)}
                                        >
                                            <TbBorderCornerSquare className="text-2xl" />
                                        </button>
                                        <button className="pl-2 pr-2 p-1 border rounded-sm cursor-pointer hover:bg-zinc-100 border-purple-600" value="dots"
                                            onClick={(e) => setCornerStyle(e.target.value)}
                                        >
                                            <TbBorderCornerSquare className="text-2xl" />
                                        </button>
                                    </div>
                                </div>
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
            <div className='shadow-xs p-3 flex-1 bg-white rounded-lg gap-8 flex flex-col'>
                <div className='flex justify-between'>
                    <h3 className='font-semibold'>QR Code Preview</h3>
                    <div className='px-2 py-1 bg-amber-50 rounded border border-amber-100'>
                        <span className='flex items-center gap-2 text-xs'><FaCircle className='text-amber-600 w-3' />Live Preview</span>
                    </div>
                </div>
                <div className='justify-center flex rounded items-center flex-col'>

                    <div className="output rounded overflow-hidden shadow" ref={previewContainerRef}></div>

                    <div>
                        <p className='text-xs text-mauve-600 text-center mt-5'>Your QR code will appear here <br /> Start by entering content and customizing</p>
                    </div>
                </div>
                {/* Download buttons */}
                <div className='flex justify-center flex-wrap gap-3 items-center'>
                    <button className='flex items-center gap-2 px-4 py-2 text-sm rounded border border-mauve-600 text-mauve-600 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:text-white text-nowrap'
                        onClick={() => downloadHandler("png")} value={"PNG"}
                    ><FiDownload />Download PNG</button>

                    <button className='flex items-center gap-2 px-4 py-2 text-sm rounded border border-mauve-600 text-mauve-600 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:text-white text-nowrap'
                        onClick={() => downloadHandler("svg")} value={"SVG"}
                    ><SiSvg />Download SVG</button>

                    <button className='flex items-center gap-2 px-4 py-2 text-sm rounded border border-mauve-600 text-mauve-600 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:text-white text-nowrap'
                        onClick={()     => downloadHandler("jpg")} value={"jpg"}
                    ><IoImageOutline />Download JPG</button>

                    <button className='flex items-center gap-2 px-4 py-2 text-sm rounded border border-mauve-600 text-mauve-600 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:text-white text-nowrap'
                    ><MdContentCopy />Copy Image</button>

                    <button className='flex items-center gap-2 px-4 py-2 text-sm rounded border border-mauve-600 text-mauve-600 hover:bg-linear-to-bl hover:from-violet-500 hover:to-fuchsia-500 hover:text-white text-nowrap'

                    ><IoShareSocialOutline />Share QR Code</button>
                </div>
            </div>
        </div >
        <div></div>
    </>
    )
}

export default QRGenerator