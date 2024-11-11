import { useRef, useState } from "react";

export default function DragDropFile() {
    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);

    const handleDrag = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const files = Array.from(e.dataTransfer.files);
        console.log(files); // Handle file uploads here
    };

    const onButtonClick = () => {
        if(!inputRef) return;
        (inputRef.current as any).click();
    };
    return (
        <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
            <input 
                type="file" 
                id="input-file-upload" 
                multiple 
                ref={inputRef} 
                onChange={(e) => console.log(e.target.files)} // Handle file selection
            />
            <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                <div>
                    <p>Drag and drop your files here or</p>
                    <button type="button" className="upload-button" onClick={onButtonClick}>Upload a file</button>
                </div>
            </label>
            {dragActive && (
                <div 
                    id="drag-file-element" 
                    onDragEnter={handleDrag} 
                    onDragLeave={handleDrag} 
                    onDragOver={handleDrag} 
                    onDrop={handleDrop}
                    style={{ border: '2px dashed #007bff', padding: '20px', textAlign: 'center' }}
                >
                    Drop your files here
                </div>
            )}
        </form>
    );
};
