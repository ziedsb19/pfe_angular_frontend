interface conversationDetail {


    "_id": String,
    "sender_id": String,
    "start": Date,
    "intent": {
        "intent": {
            "name": String,
            "confidence": Number
        },
        "entities": [any],
        "text": String,
        "message_id": String,
        "metadata": { any },
        "intent_ranking": [
            {
                "name": String,
                "confidence": Number
            },
        ]
    }

}

export default conversationDetail;