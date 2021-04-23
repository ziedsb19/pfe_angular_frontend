interface chatListItem {

    cred: [
        {
            langue: string,
            mode: string,
            sender_id: string,
            _id: string

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
    sender_id: string,
    timeend: any,
    timestart: any,
    _id: string
}

export default chatListItem;