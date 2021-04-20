let webHookUrl = ''; //Put your webhook URL inside the single quotes

let sendMessage = webHookUrl => {
    let timeStamp = new Date(new Date().getTime()).toISOString();
    let request = new XMLHttpRequest();
    request.open("POST", webHookUrl);
    request.setRequestHeader("Content-type", 'application/json');
    let params = {
        username: '', // The username of the bot you wish to send from goes here
        avatar_url: '', // The URL of the avatar goes here
        content: '', // This is the non-embed (text-only) message content
        embeds: [
            { // You can make multiple embeds by copying and pasting this object (from this `{` to the `},` (comma inclusive))
                title: '', // Title for embed
                url: '', // Sets a URL that the title follows
                description: '', // Smaller description text
                fields: [
                    {
                        name: '', // The name of the field
                        value: '', // The value of the field
                        inline: false // States if the field is inline (in a block with other fields)
                    }
                ],
                color: 0x000000, // Replace '000000' with your desired hex value. Leave the 0x alone.
                timestamp: timeStamp, // Adds a timestamp to the embed. Remove if you don't want a time stamp
                footer: {
                    icon_url: '', // Sets Icon for the footer
                    text: '' //Sets footer test
                },
                author: {
                    name: '', // Sets Embed author name
                    icon_url: '' // Sets embed author pfp
                }
            }
        ]
    }
    request.send(JSON.stringify(params));
}

sendMessage(webHookUrl);