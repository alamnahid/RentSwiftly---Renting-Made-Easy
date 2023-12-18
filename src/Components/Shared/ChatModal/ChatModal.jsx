import { IoChatbubblesOutline } from "react-icons/io5";

const ChatModal = () => {
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="flex flex-col justify-center items-center w-[10rem] h-[10rem]" onClick={() => document.getElementById('my_modal_5').showModal()}>
            <IoChatbubblesOutline className="text-[3rem] text-center text-white"/>
                <p className="text-white text-lg font-medium">Chat With Owner</p>
            </button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
};

export default ChatModal;