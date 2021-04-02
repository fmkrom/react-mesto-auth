import InfoTooltip from '../InfoTooltip/InfoTooltip'
import tooltipImageSucess from "../../images/__graphics/graphics__sucess.png"

function InfoTooltipSucess(){
    return(
        <InfoTooltip
            isOpen={true}
            notificationImage={tooltipImageSucess}
            popupText='Вы успешно зарегистрировались!'
        />
    )    
}

export default InfoTooltipSucess;
