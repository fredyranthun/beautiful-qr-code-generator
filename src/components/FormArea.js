import React from 'react';

const FormArea = (props) => {
    
    // Treating the form according to the form rendered;
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        switch (props.formToRender) {
            case 'WIFI':
                props.handleSubmit(`WIFI:T:${formData.get('type')};S:${formData.get('wifi-name')};P:${formData.get('wifi-password')}H:;`);
                break;
            case 'LINK':
                props.handleSubmit(`http://${formData.get('url')}`);
                break;
            case 'EMAIL':
                props.handleSubmit(`MATMSG:TO:${formData.get('email')};SUB:${formData.get('subject')};BODY:${formData.get('message')};;`);
                break;
            case 'MESSAGE':
                props.handleSubmit(`SMSTO:${formData.get('phone')}:${formData.get('message-sms')}`);
                break;
            case 'TEXT':
                props.handleSubmit(formData.get('text'));
                break;
            case 'TWITTER':
                props.handleSubmit(`https://twitter.com/${formData.get('twitter')}`);
                break;
            default:
                break;
        }
        
    }
    
    // Options for Rendering, according to the Option Selected
    const formOptions = {
        'WIFI': (
            <div className="flex flex-col">
                <label className="flex justify-between items-center">
                    <span className="mx-2">Network Name:</span>
                    <input
                        key='0'
                        className="w-60 m-2"
                        type="text"
                        id="wifi-name"
                        name="wifi-name"
                    />
                </label>
                <label className="flex justify-between items-center">
                    <span className="mx-2">Network Password:</span>
                    <input
                        key='1'
                        className="w-60 m-2"
                        type="password"
                        id="wifi-password"
                        name="wifi-password"
                    />
                </label>
                <select name="type" className="form-select px-4 py-3 m-2 rounded-full">
                    <option value="nopass">None</option>
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                </select>
            </div>
            ),
        'LINK': (
            <div className="flex flex-col">
                <label className="flex justify-between items-center">
                    <span className="mx-2">Type your URL:</span>
                    <input
                        key='2'
                        defaultValue=""
                        className="w-60 m-2"
                        type="text"
                        id="url"
                        name="url"
                    />
                </label>
            </div>
        ),
        'EMAIL': (
            <div className="flex flex-col">
                <label className="flex justify-between items-center">
                    <span className="mx-2">Your Email:</span>
                    <input
                        key='3'
                        className="w-60 m-2"
                        type="email"
                        id="email"
                        name="email"
                    />
                </label>
                <label className="flex justify-between items-center">
                    <span className="mx-2">Subject:</span>
                <input
                    key='4'
                    className="w-60 m-2"
                    onChange={props.handleChange}
                    type="text"
                    id="subject"
                    name="subject"
                />
                </label>
                <label className="flex justify-between items-center">
                    <span className="mx-2">Your Message:</span>
                    <textarea
                        className="w-60 m-2"
                        id="message"
                        name="message"
                    >    
                    </textarea>
                </label>

            </div>
        ),
        'MESSAGE': (
            <div className="flex flex-col">
                <label className="flex justify-between items-center">
                    <span className="mx-2">Phone Number:</span>
                <input
                    key='5'
                    className="w-60 m-2"
                    onChange={props.handleChange}
                    type="tel"
                    id="phone"
                    name="phone"
                />
                </label>
                <label className="flex justify-between items-center">
                    <span className="mx-2">Your Message:</span>
                    <textarea
                        className="w-60 m-2"
                        id="message-sms"
                        name="message-sms"
                        >

                    </textarea>
                </label>
            </div>
        ),
        'TEXT': (
            <div className="flex flex-col">
                <label className="flex justify-between items-center">
                    <span className="mx-2">Type your text:</span>
                <input
                    key='6'
                    className="w-60 m-2"
                    onChange={props.handleChange}
                    type="text"
                    id="text"
                    name='text'
                />
                </label>
            </div>
        ),
        'TWITTER': (
            <div className="flex flex-col">
                <label className="flex justify-between items-center">
                    <span className="mx-2">Twitter Username:</span>
                <input
                    key='7'
                    className="w-60 m-2"
                    onChange={props.handleChange}
                    type="text"
                    id="twitter"
                    name="twitter"
                />
                </label>
            </div>
        )
    }

    return (
        <form
            className="flex flex-col"
            onSubmit={handleFormSubmit}>
            {formOptions[props.formToRender]}
            <input
                value="Generate QR code"  
                type="submit"
                className="bg-blue-100 text-gray-500 hover:bg-blue-900 hover:text-white hover:shadow-md px-3 py-2 m-4 rounded-full text-sm font-medium"
            />
        </form>
    )
}

export default FormArea;