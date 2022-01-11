import { useSelector } from "react-redux";
import { X } from '../../Assets/Icons';

const AppNotification = () => {
    const notification = useSelector(state => state.ui.notification);

    return (
        <>
            {notification && notification.state === 'error' &&
                <div className="position-fixed toastWrapper bottom-0 end-0 p-3">
                    <div id="liveToast" className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="bg-danger text-white bg-gradient toast-header">
                            <strong className="me-auto">{notification.title}</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close">
                                <X></X>
                            </button>
                        </div>
                        <div className="toast-body bg-secondary">
                            {notification.message}
                        </div>
                    </div>
                </div>
            }
        </>

    );
}

export default AppNotification;