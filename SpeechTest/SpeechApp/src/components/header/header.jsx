import { HeaderBody, HeaderImage, Identify, Name, Status } from "./Style";

export const HeaderMsn = () => {
    return(
        <HeaderBody >
            <HeaderImage source={require("../../imgs/Rectangle.png")}/>
            <Identify>
                <Name>Coding Dojo</Name>
                <Status>digitando...</Status>
            </Identify>
        </HeaderBody>
    )
}