import InfoTooltip from '../InfoTooltip/InfoTooltip'
import tooltipImageFail from "../../images/__graphics/graphics__fail.png"

function InfoTooltipFail(){
    return(
        <InfoTooltip
            isOpen={true}
            notificationImage={tooltipImageFail}
            popupText='Что-то пошло не так! Попробуйте еще раз'
        />
    )    
}

export default InfoTooltipFail;