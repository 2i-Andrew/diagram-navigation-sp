import arrowIcon from "./Resources/Blue-Up-Arrow.png"

function CarryOutWorkClientsSchema() {

    return (
        <div>
            <table>
                <tr>
                    <td colspan="5"><div class="tableRectangle">Financial Control (External)</div></td>
                </tr>
                <tr>
                    <td id="normalCell"><div class="tableRectangle">Onboarding</div></td>
                    <td><img id="horizontalRightArrow" src={arrowIcon}/></td>
                    <td id="normalCell"><div class="tableRectangle">People Placement</div></td>
                    <td><img id="horizontalRightArrow" src={arrowIcon}/></td>
                    <td id="normalCell"><div class="tableRectangle">Delivery</div></td>
                </tr>
                <tr></tr>
                <tr></tr>
            </table>
        </div>
    )
}

export default CarryOutWorkClientsSchema