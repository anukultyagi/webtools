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
import { LuSquareDashed } from "react-icons/lu";
import toast, { Toaster } from 'react-hot-toast';
import { Helmet } from 'react-helmet-async'
import { domain } from '../../data/siteData'


const QRGenerator = () => {

    const [qrCodeInput, setQrCodeInput] = useState("Hakuna Matata")
    const [qrWidth, setQrWidth] = useState(250)
    const [forGroundColor, setForGroundColor] = useState("#000")
    const [backgroundColor, setBackgroundColor] = useState("#fff")
    const [cornerStyle, setCornerStyle] = useState("rounded")

    const [qrLogo, setQrLogo] = useState("https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg")
    const [errorCorrection, setErrorCorrection] = useState("M")

    const previewContainerRef = useRef(null);
    const qrCodeRef = useRef(null);

    const downloadHandler = (extension) => {
        qrCodeRef.current?.download({
            extension, name: "custom-qr-code"
        });
    }

    const handleFileUpload = (e) => {
        if (!e.target.files?.[0]) return;
        const logoImage = e.target.files[0]
        const objectURL = URL.createObjectURL(logoImage);
        setQrLogo(objectURL)
    }

    const handleSharing = async () => {
        try {
            const canvas =
                previewContainerRef.current.querySelector(
                    "canvas"
                );

            if (!canvas) return;

            canvas.toBlob(async (blob) => {
                if (!blob) return;

                const qrFile = new File(
                    [blob],
                    "custom-qr-code.png",
                    {
                        type: "image/png",
                    }
                );

                if (
                    navigator.canShare?.({
                        files: [qrFile],
                    })
                ) {
                    await navigator.share({
                        title: "QR Code",
                        text: "Check out this QR code",
                        files: [qrFile],
                    });

                    toast.success(
                        "QR shared successfully!"
                    );
                } else {
                    toast.error(
                        "Sharing not supported"
                    );
                }
            });
        } catch (error) {
            console.error(error);
            toast.error("Sharing failed");
        }
    };

    const handleCopyBtn = async () => {
        try {
            const canvas =
                previewContainerRef.current.querySelector(
                    "canvas"
                );

            if (!canvas) return;

            canvas.toBlob(async (blob) => {
                await navigator.clipboard.write([
                    new ClipboardItem({
                        "image/png": blob,
                    }),
                ]);

                toast.success("QR copied!");
            });
        } catch (error) {
            toast.error("failed to copy QR");
        }
    }

    useEffect(() => {

        qrCodeRef.current = new QRCodeStyling({
            width: qrWidth,
            height: qrWidth,
            margin: 10,
            type: "canvas",
            data: qrCodeInput,
            image: qrLogo, // Logo in center,
            "qrOptions": {
                "errorCorrectionLevel": errorCorrection
            },
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

            data: qrCodeInput,
            image: qrLogo,

            dotsOptions: {
                color: forGroundColor,
                type: cornerStyle,
            },
            "qrOptions": {
                "errorCorrectionLevel": errorCorrection
            },
            backgroundOptions: {
                color: backgroundColor,
            },
        });
    }, [
        qrCodeInput,
        qrWidth,
        forGroundColor,
        backgroundColor,
        cornerStyle,
        errorCorrection,
        qrLogo
    ]);

    return (<>
        <Helmet>
            <title>Free QR Code Generator with Logo & Custom Design | WebTools</title>

            <link rel="canonical" href={`${domain}/tools/free-qr-code-generator`} />

            <meta name="description" content="Generate custom QR codes instantly with logo, colors, styles and error correction. Download QR codes in PNG, SVG or JPG for free."></meta>

            {/* Open Graph */}
            <meta
                property="og:title"
                content="Free QR Code Generator with Logo & Custom Design | WebTools"
            />

            <meta
                property="og:description"
                content="Generate custom QR codes instantly with logo, colors, styles and error correction. Download QR codes in PNG, SVG or JPG for free."
            />

            <meta
                property="og:type"
                content="website"
            />

            <meta
                property="og:url"
                content={`${domain}/tools/free-qr-code-generator`}
            />

            <meta
                property="og:image"
                content={`${domain}/og.png`}
            />
            <meta
                name="twitter:card"
                content="summary_large_image"
            />

            <meta
                name="twitter:title"
                content="Free QR Code Generator with Logo & Custom Design | WebTools"
            />

            <meta
                name="twitter:description"
                content="Generate custom QR codes instantly with logo, colors, styles and error correction."
            />

            <meta
                name="twitter:image"
                content={`${domain}/og.png`}
            />
            <meta
                name="robots"
                content="index, follow"
            />

        </Helmet>

        <div className='p-3 flex flex-col md:flex-row gap-4 max-w-7xl mx-auto w-full'>
            <Toaster />

            {/* Customization Panel */}
            <div className='shadow-xs p-4 flex-1 bg-white rounded-lg w-full border border-gray-100'>
                <div className='flex flex-col gap-5'>

                    {/* Step 1: Input Area */}
                    <div className="flex flex-col gap-2">
                        <h3 className="text-base font-semibold text-gray-800">1. Enter Content</h3>
                        <textarea
                            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 transition h-20 resize-none text-sm text-gray-700"
                            placeholder="Type or paste your text here..."
                            value={qrCodeInput}
                            onChange={(e) => setQrCodeInput(e.target.value)}
                        ></textarea>
                    </div>

                    {/* Step 2: Customization Blocks */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-base font-semibold text-gray-800">2. Customize Your QR Code</h3>

                        {/* Row 1: Size & Upload */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className='w-full sm:w-1/2'>
                                <QRSizeSlider setQrWidth={setQrWidth} value={qrWidth} />
                            </div>

                            <div className='flex flex-col w-full sm:w-1/2'>
                                <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="file_input">Upload Logo</label>
                                <input
                                    className="cursor-pointer border border-gray-300 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-xs px-3 py-1.5 h-9 rounded-md text-gray-700 bg-white"
                                    aria-describedby="file_input_help"
                                    id="file_input"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleFileUpload(e)}
                                />
                                <p className="mt-1 text-xs text-gray-400" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                            </div>
                        </div>

                        {/* Row 2: Styles & Colors */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                            {/* Corner Styles */}
                            <div className="w-full flex flex-col">
                                <span className='text-sm font-medium text-gray-700 mb-2'>Set Corner Style</span>
                                <div className="flex gap-2">
                                    <button
                                        className={`p-2 border rounded-md cursor-pointer hover:bg-zinc-50 transition flex-1 flex justify-center items-center ${cornerStyle === 'square' ? 'border-amber-500 bg-amber-50/50 text-amber-600' : 'border-gray-300 text-gray-600'}`}
                                        value="square"
                                        onClick={() => setCornerStyle("square")}
                                    >
                                        <FaRegSquareFull className="text-xl" />
                                    </button>
                                    <button
                                        className={`p-2 border rounded-md cursor-pointer hover:bg-zinc-50 transition flex-1 flex justify-center items-center ${cornerStyle === 'rounded' ? 'border-amber-500 bg-amber-50/50 text-amber-600' : 'border-gray-300 text-gray-600'}`}
                                        value="rounded"
                                        onClick={() => setCornerStyle("rounded")}
                                    >
                                        <TbBorderCornerSquare className="text-xl" />
                                    </button>
                                    <button
                                        className={`p-2 border rounded-md cursor-pointer hover:bg-zinc-50 transition flex-1 flex justify-center items-center ${cornerStyle === 'dots' ? 'border-amber-500 bg-amber-50/50 text-amber-600' : 'border-gray-300 text-gray-600'}`}
                                        value="dots"
                                        onClick={() => setCornerStyle("dots")}
                                    >
                                        <LuSquareDashed className="text-xl" />
                                    </button>
                                </div>
                            </div>

                            {/* Foreground Color */}
                            <div className="flex flex-col w-full">
                                <span className='text-sm font-medium text-gray-700 mb-2'>Foreground Color</span>
                                <div className="w-full flex items-center gap-2 border border-gray-300 rounded-md pl-3 pr-2 h-9 bg-white">
                                    <input
                                        type="color"
                                        value={forGroundColor}
                                        onChange={(e) => setForGroundColor(e.target.value)}
                                        className="w-6 h-6 p-0 border-none cursor-pointer bg-transparent"
                                    />
                                    <span className="text-sm font-mono text-gray-600">{forGroundColor}</span>
                                </div>
                            </div>

                            {/* Background Color */}
                            <div className="flex flex-col w-full sm:col-span-2 lg:col-span-1">
                                <span className='text-sm font-medium text-gray-700 mb-2'>Background Color</span>
                                <div className="w-full flex items-center gap-2 border border-gray-300 rounded-md pl-3 pr-2 h-9 bg-white">
                                    <input
                                        type="color"
                                        value={backgroundColor}
                                        onChange={(e) => setBackgroundColor(e.target.value)}
                                        className="w-6 h-6 p-0 border-none cursor-pointer bg-transparent"
                                    />
                                    <span className="text-sm font-mono text-gray-600">{backgroundColor}</span>
                                </div>
                            </div>
                        </div>

                        {/* Row 3: Error Correction */}
                        <div className="flex gap-4">
                            <div className="w-full flex flex-col gap-1">
                                <span className='text-sm font-medium text-gray-700 mb-1'>Error Correction</span>
                                <select
                                    className="text-sm h-9 w-full px-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 bg-white text-gray-700 transition"
                                    onChange={(e) => setErrorCorrection(e.target.value)}
                                    value={errorCorrection}
                                >
                                    <option value="L">Low (L)</option>
                                    <option value="M">Medium (M)</option>
                                    <option value="H">High (H)</option>
                                </select>
                                <span className="text-gray-400 text-xs text-right mt-1">
                                    Recommended for most users
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Preview & Actions Panel */}
            <div className='shadow-xs p-4 flex-1 bg-white rounded-lg gap-6 flex flex-col w-full border border-gray-100'>
                <div className='flex justify-between items-center gap-2'>
                    <h3 className='font-semibold text-gray-800'>QR Code Preview</h3>
                    <div className='px-2.5 py-1 bg-amber-50 rounded-md border border-amber-100 shrink-0'>
                        <span className='flex items-center gap-1.5 text-xs font-medium text-amber-700'>
                            <FaCircle className='text-amber-500 w-2 h-2 animate-pulse' /> Live Preview
                        </span>
                    </div>
                </div>

                <div className='justify-center flex rounded-md items-center flex-col w-full overflow-hidden py-4 bg-gray-50/50 border border-dashed border-gray-200'>
                    <div className="output rounded-md overflow-auto max-h-60 shadow-sm bg-white" ref={previewContainerRef}></div>
                    <div>
                        <p className='text-xs text-gray-400 text-center mt-5 px-4'>
                            Your QR code will update automatically. <br /> Start customizing options on the left.
                        </p>
                    </div>
                </div>

                {/* Unified Actions / Download buttons */}
                <div className='flex justify-center flex-wrap gap-2.5 items-center mt-auto'>
                    <button
                        className='flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition text-nowrap cursor-pointer'
                        onClick={() => downloadHandler("png")} value={"PNG"}
                    ><FiDownload />Download PNG</button>

                    <button
                        className='flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition text-nowrap cursor-pointer'
                        onClick={() => downloadHandler("svg")} value={"SVG"}
                    ><SiSvg />Download SVG</button>

                    <button
                        className='flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition text-nowrap cursor-pointer'
                        onClick={() => downloadHandler("jpg")} value={"jpg"}
                    ><IoImageOutline />Download JPG</button>

                    <button
                        className='flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition text-nowrap cursor-pointer'
                        onClick={handleCopyBtn}
                    ><MdContentCopy />Copy Image</button>

                    <button
                        className='flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition text-nowrap cursor-pointer'
                        onClick={handleSharing}
                    ><IoShareSocialOutline />Share QR Code</button>
                </div>
            </div>
        </div>
        <div></div>
    </>
    )
}

export default QRGenerator