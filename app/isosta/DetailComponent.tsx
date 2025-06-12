import React from 'react';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
export type ModalProps = {
    open: boolean;
    onCancel: () => void;
    onOk: () => void;
    item: any;
};

export default function Modal(props: ModalProps) {
    const item = props.item;
    return props.open ? (
        <>
            <div className="modal d-block" tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">{item.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => props.onCancel()}></button>
                        </div>
                        <div className="modal-body">
                            <Image src={"/uploads/" + item.file} width="500" height="500" className="bd-placeholder-img card-img-top" alt="{item.title}" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => props.onOk()}>閉じる</button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                onClick={() => props.onCancel()}
            ></div>
        </>
    ) : (
        <></>
    );
};