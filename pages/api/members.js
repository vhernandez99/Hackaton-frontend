// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import memberImage from '../../assets/images/pancho.png'
// import rafaImage from "../../assets/images/rafa.png";

const members = [
    {
        title: 'Ing.',
        name: 'Víctor Hernández Aguilera',
        role: 'Blockchain Developer',
        image: memberImage,
    },
    {
        title: 'Ing.',
        name: 'Litzi Yarely Sánchez Enríquez',
        role: 'UI/UX Designer',
        image: memberImage,
    },
    {
        title: 'Ing.',
        name: 'Francisco Orta Ramírez',
        role: 'Front-End Developer',
        image: panchoImage,
    },
    {
        title: 'TSU.',
        name: 'Rafael Sánchez Olguín',
        role: 'Front-End Developer',
        image: rafaImage,
    },
]

export default function handler(req, res) {
    return res.status(200).json(members)
}
