import { useState } from 'react'
import './App.css'
import { ImageProfile } from './components/ImageProfile'
import { Title } from './components/Title'
import moment from 'moment';

function App() {
  const [hide, setHide] = useState(false)

  return (
    <main id="main">
      <div className="leftPort">
        <ImageProfile image="https://media.discordapp.net/attachments/1140705765573804032/1220047922339516536/322916359_713062407047654_6271171536542656101_n.jpg?ex=660d852c&is=65fb102c&hm=fdb299fcc0eb64a96191b119ef942401a6bc9a866f44c55f1bc3dcdb2890f227&=&format=webp&width=507&height=676"  />

        <Title title="Pachapon Meekhun (ohm)">
          <h3>ตำแหน่ง : IT Support</h3>
        </Title>

        <Title title="Contact">
     
          <p>วันที่ปัจจุบัน: {moment().format("D MMM YYYY")}</p>
          <p>วันเกิด: {moment("2001/01/16").format("D MMM YYYY")}</p>
          <p style={{ display: hide ? 'none': 'block'}} >
            Tel : +66636046747 
          </p>
          <button onClick={() => setHide(!hide)}>
            {hide ? 'Show': 'Hide'}
          </button>
          <p>Email : s64122202079@ssru.ac.th</p>
          
        </Title>
    
        <Title title="Education">
          <p>ปริญญาตรี สาขาเทคโนโลยีสารสนเทศ</p>
          <p>มหาวิทยาลัยราชภัฏสวนสุนันทา</p> 
        </Title>
      </div>

      <div className="rightPort">
        <Title title="Profile">
          <p> ชื่อเล่นชื่อ โอม ปัจจุบันอายุ 23 ปี ศึกษาอยู่ที่มหาวิทยาลัยราชภัฏ สวนสุนันทา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยี สารสนเทศ มีประสบการณ์การประกอบคอมลงวินโดว์ ลงโปรแกรม และแก้ปัญหาวินโดว์บูตไม่ขึ้น และมีประสบการเรียนจากมหาวิทยาลัย ซึ่งอยากฝึกงานเป็น ไอที ซัพพอร์ต</p>
        </Title>

        <Title title="Work Experience">
          <p>ประกอบคอมและซ่อมคอม</p>
          <p>ลงวินโดว์ และแก้ไขปัญหาวินโดว์บูตไม่ติด</p>
        </Title>

        <Title title="Skills"> 
          <p>สามารถแก้ไขปัญหาทางเทคนิคของระบบคอมพิวเตอร์ได้</p>
          <p>สามารถลงวินโด้และลงโปรแกรมได้</p>
          <p>มีความรู้เรื่องฮาร์ดแวร์อุปกรณ์คอมพิวเตอร์</p>
          <p>HTML พื้นฐาน</p>
        </Title>
      </div>
    </main>
  )
}

export default App
