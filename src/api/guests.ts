import { Dispatch, SetStateAction } from "react";
import { RecordType } from "../Types/types";
import axios from 'axios';
import { statusHelper } from '../utils/statusHelper';

const baseURL = window.location.origin;

export async function getGuestMatch(
    searchQuery: string,
    setGuestsMatchContext: Dispatch<SetStateAction<RecordType[] | []>>,
    setIsFetching: Dispatch<SetStateAction<boolean>>
) {
    setIsFetching(true);

    await axios.get(`${baseURL}/api/guests?searchQuery=${searchQuery}`)
        .then(response => {            
            setIsFetching(false);
            setGuestsMatchContext(response.data);
        })
        .catch(() => {
            setIsFetching(false);
        });
}

export async function getGroup(
    searchQuery: string,
    setGuestsGroupContext: Dispatch<SetStateAction<RecordType[] | []>>
) {
    await axios.get(`${baseURL}/api/guests?searchQuery=${searchQuery}&target=group`)
        .then(response => {
            const modifiedRecords = response.data.map((guest: RecordType) => {
                delete guest.createdTime;
                return guest;
            })
            setGuestsGroupContext(modifiedRecords);
        })
        .catch(() => {});
}

export async function updateGuestGroup(updatedData: RecordType[]) {
    const structuredData = {
        "records": updatedData.map(guest => {
            return {
                ...guest,
                fields: {
                    ...guest.fields,
                    status: statusHelper(guest.fields.status)
                }
            };
        })
    }

    const response = await axios.patch(
        `${baseURL}/api/guests`,
        structuredData,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    );

    return response.data;
}
