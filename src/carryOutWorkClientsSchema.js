import { getToolbarUtilityClass } from "@mui/material"
import arrowIcon from "./Resources/Blue-Up-Arrow.png"

function CarryOutWorkClientsSchema() {

    function goTo(url){
        return window.location = url
    }

    return (
        <div>
            <div id="mainContainer">
                <div class="rectangle">Financial Control (External)</div>
                <div>

                   
                        <div class="sideBySide" id="width">
                            <div id="width100">
                                <div class="rectangle">Onboarding</div>
                                <div class="sideBySide">
                                    <div id="width50" class="rectangle">Contracts</div> 
                                    <div id="width50" class="rectangle">Commercials</div> 
                                </div>
                            </div>

                            <div>
                                <img id="horizontalRightArrow" src={arrowIcon}/>
                            </div>                            
                            
                            <div id="width100">
                                <div class="rectangle">People Placement</div>
                                <div class="sideBySide">
                                    <div id="width100" class="completedRectangle" onClick={() => goTo("https://2itesting.sharepoint.com/sites/2iProcessWorkflowsTestSite/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2F2iProcessWorkflowsTestSite%2FShared%20Documents%2FWorkforce%20Planning&viewid=989e8d93%2D1dba%2D4a3a%2D8544%2D0a73951e0958")}>Workforce Planning</div>
                                </div>  
                            </div>

                            <div>
                                <img id="horizontalRightArrow" src={arrowIcon}/>
                            </div>   

                            <div id="width100">
                                <div class="rectangle">Delivery</div>
                                <div class="sideBySide">
                                    <div id="width33" class="rectangle">Delivery performance</div> 
                                    <div id="width33" class="rectangle">Client satisfaction</div> 
                                    <div id="width33" class="rectangle">Account Growth</div>
                                </div> 
                            </div>
                        </div> 

                        <div class="sideBySide" id="paddingAbove">             
                            <div class="completedRectangle" onClick={() => goTo("https://2itesting.sharepoint.com/sites/2iProcessWorkflowsTestSite/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2F2iProcessWorkflowsTestSite%2FShared%20Documents%2FRecruitment&viewid=989e8d93%2D1dba%2D4a3a%2D8544%2D0a73951e0958")}>Recruitment</div> 
                            <div class="rectangle">Onboarding</div> 
                            <div class="rectangle">PMF</div>
                            <div class="rectangle">L&D</div>
                            <div class="rectangle">Career Progression</div>                    
                        </div>            
                        
                    
                </div>
            </div>
            
            
            {/* <table>
                <tr>
                    <td colspan="30"><div class="tableRectangle">Financial Control (External)</div></td>
                </tr>
                <tr>
                    <td colspan="8"><div class="tableRectangle">Onboarding</div></td>
                    <td colspan="1"><img id="horizontalRightArrow" src={arrowIcon}/></td>
                    <td colspan="8"><div class="tableRectangle">People Placement</div></td>
                    <td colspan="1"><img id="horizontalRightArrow" src={arrowIcon}/></td>
                    <td colspan="8"><div class="tableRectangle">Delivery</div></td>
                </tr>
                <tr>
                    <td colspan="10">
                        <div id="sideBySide">
                            <div class="tableRectangle">Contacts</div>
                            <div class="tableRectangle">Commercials</div>
                        </div>                        
                    </td>
                    <td colspan="10">
                        <div id="sideBySide">
                            <div class="tableRectangle">Workforce Planning</div>
                        </div>
                    </td>
                    <td colspan="10">
                        <div id="sideBySide">
                            <div class="tableRectangle">Delivery Performance</div>
                            <div class="tableRectangle">Client Satisfaction</div>
                            <div class="tableRectangle">Account Growth</div>
                        </div>
                    </td>
                </tr>
                <tr></tr>
            </table> */}
        </div>
    )
}

export default CarryOutWorkClientsSchema