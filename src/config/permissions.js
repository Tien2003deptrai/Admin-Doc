import { useState } from "react";
import { sendToastWarning } from "./configToast";

export const handleAdd = (action) => {
    if (!action) {
        sendToastWarning('You are not having access for add.');
    }
}

export const handleUpdate = (action) => {
    if (!action) {
        sendToastWarning('You are not having access for update.');
    }
}

export const handleDelete = (action) => {
    if (!action) {
        sendToastWarning('You are not having access for delete.');
    }
}

export const handleView = (action) => {
    if (!action) {
        sendToastWarning('You are not having access for view.');
    }
}

export const usePermissionState = () => {
    const [haveAdd, setHaveAdd] = useState(false);
    const [haveUpdate, setHaveUpdate] = useState(false);
    const [haveDelete, setHaveDelete] = useState(false);
    const [haveView, setHaveView] = useState(false);

    return {
        haveAdd,
        setHaveAdd,
        haveUpdate,
        setHaveUpdate,
        haveDelete,
        setHaveDelete,
        haveView, setHaveView
    }
}