import InfoTooltip from '../InfoTooltip/InfoTooltip'
import tooltipImageSucess from "../../images/__graphics/graphics__sucess.png"

function InfoTooltipSucess(props){
    return(
        <InfoTooltip
            isOpen={props.isOpen}
            notificationImage={tooltipImageSucess}
            popupText='Вы успешно зарегистрировались!'
        />
    )    
}

export default InfoTooltipSucess;
