import { MsgBody, MsgList, MsgText } from "./Style"

export const MsgBallon = (
    lado,
    texto
) => {
    return(
        <MsgBody>
            <MsgText>{texto}</MsgText>
        </MsgBody>
    )
}
