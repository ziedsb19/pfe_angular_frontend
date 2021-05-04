interface botMessage {
    type: string,
    text: string,
    href: [
        { "text": string, "href": string }
    ],
    choices: [
        {
            text: string,
            value: string
        }
    ],
    table: any,
    mins: any,
    maxs: any,
    steps: any,
    defaults: any,

}

export default botMessage;