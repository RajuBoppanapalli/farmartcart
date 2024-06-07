
import { Banner } from "../Banner/Banner.component";
import BrowseCategory from "../BrowseCategory/BrowseCategory.component";
import { CabbagePage } from "../Cabbagepage/CabbagePage.component";
import { DailyHealth } from "../DailyHealth/DailyHealth.component";
import { EssentialProduct } from "../Essential/EssentialProduct.component";
import { FeaturedProducts } from "../FeaturedProducts/FeaturedProduct.component";
import { Footer } from "../Footer/footer.component";
import { Login } from "../Login/login.component";
import { NavBarComp } from "../NavBar/navbar.component";
import { Registration } from "../Registeration/Registration.component";
import { RelatedProducts } from "../RelatedProducts/RelatedProducts.component";
import { Secure } from "../Secure/Secure.component";
import { Store } from "../Store/Store.component";
import { TopSaver } from "../TopsaverToday/TopSaver.component";
import { BottomNavbar } from "../bottomnavbar/bottomnavbar";
import { FeatureBrands } from "../featurebrand/featureBrand.component";
import { JustLanding } from "../justlanding/justlanding.component";
import { Main } from "../main/main.component";


export function Home(){
    return(
        <>
        
        <Main></Main>
     
     <BrowseCategory></BrowseCategory>
     <FeatureBrands></FeatureBrands>
     <TopSaver></TopSaver>
     <JustLanding></JustLanding>
     <Banner></Banner>
     <FeaturedProducts></FeaturedProducts>
     <EssentialProduct></EssentialProduct>
     <CabbagePage></CabbagePage>
     <DailyHealth></DailyHealth>
     <RelatedProducts></RelatedProducts>
     <Secure></Secure>
    
        </>
    )
}