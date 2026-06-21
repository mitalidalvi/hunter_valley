import Button from "../components/Button";
import Image from "next/image";
import facilityImg from "../../../public/imgs/facility1.jpg"

export default function Facility() {
    return (
        <section className="facility">
            <h2 className="facilityHead">Facilities</h2>
            <p className="subPara">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>

            <div className="facility-containers">
                <div className="container">
                    <Image src={facilityImg} width={300} height={200} className="facility-img"/>
                    <div className="facility-content">
                        <h3>Tennis</h3>
                        <div className="small-cont">
                            <p>9 Clay Courts</p>
                            <p>4 Hard Courts </p>
                        </div>
                        <p className="cont-para">
                            Lorem Ipsum has been the industry's standard 
                            dummy text ever since the 1500s, 
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}