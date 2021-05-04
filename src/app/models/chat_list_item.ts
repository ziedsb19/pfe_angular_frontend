interface chatListItem {

    cred: [
        {
            langue: string,
            mode: string,
            sender_id: string,
            _id: string,
            adresse: string,
            age: number,
            nom: string,
            prenom: string,
            sexe: string,

        }
    ],
    numberofhistory: Number,
    review: [
        {
            commentaire: string,
            score: Number,
            sender_id: string,
            _id: string
        }
    ],
    history: [{

        "message": any,
        "time": number,
        "sender": string
    }
    ],
    sender_id: string,
    timeend: any,
    timestart: any,
    _id: string
}

export default chatListItem;