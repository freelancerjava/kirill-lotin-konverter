import React, { useState } from 'react';

import { Upload, message, Form } from 'antd';
import { Modal, Button, Result, List } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';

const { Dragger } = Upload;




const Uploader = () => {
    const [files, setfiles] = useState([]);

    const [file, setfile] = useState({});

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (<>
        <Form>
            <Form.Item label="" name="files">
                <FilesUploader setfiles={setfiles} />
            </Form.Item>
        </Form>
        <hr />
        {console.log(files)}
        <List
            size="large"
            bordered
            dataSource={files}
            renderItem={item => <List.Item><span>{item.filename}</span>
                <Button type="primary" icon={<DownloadOutlined />} size={'large'}
                    onClick={() => {
                        setfile(item)
                        showModal()
                    }}>Yuklab olish</Button></List.Item>}
        />
        {/* <ul>
            {files.map(file => {
                return (
                    <li>
                        <span>{file.filename}</span>
                        <Button type="primary" icon={<DownloadOutlined />} size={'large'}
                            onClick={() => {
                                setfile(file)
                                showModal()
                            }}>Yuklab olish</Button>
                    </li>
                )
            })}
        </ul> */}

        <Modal title="Faylni yuklash oynasi" visible={isModalVisible}
            onOk={handleOk} onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Yopish
                </Button>,
                <Button key="submit" type="primary" href={file.url}>
                    Yuklab olish
                </Button>
            ]}
        >
            <Result
                status="success"
                title="Reklamaning sarlavhasi"
                subTitle="Reklama qilinayotgan mahsulot to'risida qisqacha ma'lumot"
                extra={[
                    <Button type="primary" key="console">Premium kliyentga aylanish</Button>,
                    <Button key="buy" href={"https://google.com"} target="_blank">Reklamani ko'rish</Button>,
                ]}

            />
        </Modal>
    </>
    )
}

const FilesUploader = ({ value, onChange, setfiles }) => {

    const props = {
        name: 'files',
        multiple: true,
        action: 'http://response.uz:2337/upload',
        customRequest: (option) => {

            function getError(option, xhr) {
                var msg = "cannot ".concat(option.method, " ").concat(option.action, " ").concat(xhr.status, "'");
                var err = new Error(msg);
                err.status = xhr.status;
                err.method = option.method;
                err.url = option.action;
                return err;
            }

            function getBody(xhr) {
                var text = xhr.responseText || xhr.response;
                if (!text) {
                    return text;
                }
                try {
                    // console.log("JSON.parse(text)", JSON.parse(text)[0]);
                    // setfiles([...files, ...JSON.parse(text)])
                    // console.log('files', files);

                    return JSON.parse(text);
                } catch (e) {
                    return text;
                }
            }

            const xhr = new XMLHttpRequest();

            if (option.onProgress && xhr.upload) {
                xhr.upload.onprogress = function progress(e) {
                    if (e.total > 0) {
                        e.percent = e.loaded / e.total * 100;
                    }

                    option.onProgress(e);
                };
            }
            const { file } = option
            const form = new FormData();
            form.append('files', file);

            xhr.onerror = function error(e) {
                option.onError(e);
            };

            xhr.onload = function onload() {
                if (xhr.status < 200 || xhr.status >= 300) {
                    return option.onError(getError(option, xhr), getBody(xhr));
                }

                return option.onSuccess(getBody(xhr), xhr);
            };
            xhr.open('POST', 'https://kirill-lotin.response.uz:8443/upload');
            xhr.send(form)

            return {
                abort: function abort() {
                    xhr.abort();
                }
            };
        },
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
                // console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} Fayllar muvaffaqiyatli yuklandi.`);
                onChange(info)
            } else if (status === 'error') {
                message.error(`${info.file.name} Fayllar serverga yuklanmadi.`);
            }
        },
        onDrop(e) {
            // console.log('Dropped files', e.dataTransfer.files);
        },
        beforeUpload: file => {
            console.log(file.type);
            
            if (file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
                message.error(`${file.name} - docx file emas`);
            }
            return file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ? true : Upload.LIST_IGNORE;
        },
    };

    return (<>
        <Dragger {...props} >
            {/* {console.log(value)} */}
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">Faylni yuklash uchun maydonga sichqoncha bilan bosing yoki faylni olib keling</p>
        </Dragger>
        <hr />
        <input type="submit" value="Kirilldan lotinga" onClick={() => {
            const list = value.fileList.map(({ response }) => {
                return {
                    'input': '/home/farrux/java/kirill-lotin-server/app/public/uploads/' + response[0].hash + ".docx",
                    'output': '/home/farrux/java/kirill-lotin-server/app/public/uploads/' + response[0].hash + "-tr.docx",
                    'url': 'https://kirill-lotin.response.uz:8443' + '/uploads/' + response[0].hash + "-tr.docx",
                    'filename': response[0].name
                }
            })

            const xhr = new XMLHttpRequest();
            // xhr.withCredentials = true;
            xhr.open("POST", "https://kirill-lotin.response.uz:8443/transliteration/list");
            xhr.setRequestHeader("Content-Type", "application/json");
            // xhr.open('POST', 'http://response.uz:8083/transliteration/list');
            // xhr.setRequestHeader('Content-Type', 'application/json')
            // xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
            // console.log(value.fileList);


            // console.log(value);

            xhr.onload = function onload() {
                var text = xhr.responseText || xhr.response;
                if (!text) {
                    return text;
                }
                try {
                    console.log("JSON.parse(text) - success", JSON.parse(text));
                    setfiles(JSON.parse(text))
                    return JSON.parse(text);
                } catch (e) {
                    return text;
                }
            };
            xhr.send(JSON.stringify(list))

            // var myHeaders = new Headers();
            // myHeaders.append("Content-Type", "application/json");

            // var requestOptions = {
            //     method: 'POST',
            //     headers: myHeaders,
            //     body: JSON.stringify(list),
            //     redirect: 'follow'
            // };

            // fetch("http://response.uz:8083/transliteration/list", requestOptions)
            //     .then(response => {
            //         response.text()
            //         // setfiles(response)
            //     })
            //     .then(result => {
            //         console.log(result)
            //         setfiles(JSON.parse(result))
            //     })
            //     .catch(error => console.log('error', error));
        }} />


    </>)
}

export default Uploader

