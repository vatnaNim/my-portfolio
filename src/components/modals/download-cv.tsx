
import { Box, IconButton, Button } from "@mui/material";
import { Download, Back, WordIcon, PdfIcon } from "../../assets/icons";

import html2pdf from "html2pdf.js";

const DownloadCv = ({ closeDownload }: { closeDownload: () => void }) => {

    const downloadAsPdf = () => {
        const element = document.getElementById("cv-film");
        if (element) {
            const options = {
                margin: 0.5,
                filename: 'MyCV.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
            };
            html2pdf().from(element).set(options).save();
        } 
        else {
            console.error("Element with id 'cv-film' not found");
        }
    };

    const downloadAsWord = () => {
        const element = document.getElementById("cv-film");
        if (element) {
            const content = `
                <html>
                    <head><meta charset="utf-8"><title>MyCV</title></head>
                    <body>${element.innerHTML}</body>
                </html>
            `;
            const blob = new Blob(["\ufeff", content], { type: "application/msword" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "MyCV.doc";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            console.error("Element with id 'cv-film' not found");
        }
    };

    return (
        <Box>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px solid #ccc"
                pb={1}
            >
                <Download className="w-8 h-8 text-black" />
                <IconButton
                    size="small"
                    sx={{ color: "#d50000" }}
                    onClick={closeDownload}
                >
                    <Back className="w-6 h-6 object-scale-down" />
                </IconButton>
            </Box>

            <div className="flex">
                <div className="w-[50%]">
                    <div id="cv-film">
                        <span className="text-red-500">
                            hellow
                        </span>
                    </div>
                </div>

                <div className="w-[50%] bg-gray-300 m-1 rounded-md shadow-md space-y-4 px-3 py-4">
                    <h3 className="text-xl">Download CV</h3>
                    <div className="space-x-2">
                        <Button
                            variant="outlined"
                            size="small"
                            className="space-x-2"
                            onClick={downloadAsWord}
                        >
                            <WordIcon className="w-8 h-8" />
                            <span className="font-semibold text-md">Word</span>
                        </Button>

                        <Button
                            variant="outlined"
                            size="small"
                            className="space-x-2"
                            color="error"
                            onClick={downloadAsPdf}>
                            <PdfIcon className="w-8 h-8" />
                            <span className="font-semibold text-md text-red-500">PDF</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Box>
    );
};

export default DownloadCv;
