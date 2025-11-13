import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Richard James is a dedicated general physician focused on providing comprehensive healthcare for patients of all ages. He emphasizes preventive care, accurate diagnosis, and effective treatment for common medical conditions.',
    fees: 500,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Larson',
    image: doc2,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Emily Larson specializes in women’s reproductive health, offering compassionate care in areas such as prenatal counseling, fertility, and hormonal wellness. She is committed to supporting women at every stage of life.',
    fees: 600,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Sarah Patel',
    image: doc3,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Sarah Patel focuses on diagnosing and treating skin, hair, and nail disorders. She combines medical expertise with aesthetic understanding to help patients achieve healthy, glowing skin and renewed confidence.',
    fees: 300,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Christopher Lee',
    image: doc4,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Christopher Lee is a caring pediatrician dedicated to children’s health, from infancy to adolescence. He focuses on preventive care, growth monitoring, vaccinations, and early disease management.',
    fees: 400,
    address: {
      line1: '47th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Jennifer Garcia',
    image: doc5,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Jennifer Garcia specializes in diagnosing and managing disorders of the brain and nervous system. She is passionate about improving patients’ quality of life through evidence-based neurological care.',
    fees: 500,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Williams',
    image: doc6,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Andrew Williams is a skilled neurologist with expertise in treating migraines, epilepsy, and nerve disorders. He believes in a holistic approach that combines modern medicine with patient-centered care.',
    fees: 800,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Christopher Davis',
    image: doc7,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Christopher Davis provides comprehensive primary care with a focus on preventive medicine, lifestyle guidance, and chronic disease management. He is known for his attentive and compassionate approach.',
    fees: 1000,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Timothy White',
    image: doc8,
    speciality: 'Gynecologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Timothy White is a trusted gynecologist who provides personalized care in pregnancy management, menstrual health, and infertility. His goal is to ensure women’s comfort and confidence in their well-being.',
    fees: 800,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr. Ava Mitchell',
    image: doc9,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Ava Mitchell is passionate about enhancing skin health through advanced dermatological treatments. She specializes in acne management, skin rejuvenation, and cosmetic dermatology.',
    fees: 900,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. Jeffrey King',
    image: doc10,
    speciality: 'Pediatricians',
    degree: 'MBBS',
    experience: '2 Years',
    about: 'Dr. Jeffrey King is a pediatrician who focuses on providing nurturing care to children. He supports families in maintaining healthy growth, development, and nutrition for their little ones.',
    fees: 400,
    address: {
      line1: '47th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. Zoe Kelly',
    image: doc11,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Zoe Kelly is a compassionate neurologist known for her expertise in treating stroke, memory disorders, and neuropathies. She aims to deliver personalized care using the latest neurological advancements.',
    fees: 1000,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. Patrick Harris',
    image: doc12,
    speciality: 'Neurologist',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Patrick Harris has deep expertise in treating nervous system conditions including Parkinson’s disease, seizures, and chronic pain. He values patient education and long-term neurological wellness.',
    fees: 500,
    address: {
      line1: '57th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc13',
    name: 'Dr. Chloe Evans',
    image: doc13,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '4 Years',
    about: 'Dr. Chloe Evans offers patient-centered care focused on prevention, diagnosis, and treatment of everyday health concerns. She promotes holistic well-being through balanced and practical healthcare advice.',
    fees: 5000,
    address: {
      line1: '17th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc14',
    name: 'Dr. Ryan Martinez',
    image: doc14,
    speciality: 'Gastroenterologist',
    degree: 'MBBS',
    experience: '3 Years',
    about: 'Dr. Ryan Martinez is a skilled Gastroenterologist dedicated to diagnosing and treating digestive system disorders with precision and compassion, ensuring patients achieve optimal gut health and overall well-being',
    fees: 600,
    address: {
      line1: '27th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
  {
    _id: 'doc15',
    name: 'Dr. Amelia Hill',
    image: doc15,
    speciality: 'Dermatologist',
    degree: 'MBBS',
    experience: '1 Years',
    about: 'Dr. Amelia Hill is a skilled dermatologist with a special interest in skincare, pigmentation disorders, and aesthetic dermatology. She aims to help patients achieve both healthy and beautiful skin.',
    fees: 3000,
    address: {
      line1: '37th Cross, Richmond',
      line2: 'Circle, Ring Road, London'
    }
  },
]
