// const getDogs = async (req, res) => {
//     const { search } = req.query;
//     console.log(search);
//         try {
//             if (search) {
//             const { data } = await axios.get(`${END_POINT}/search?q=${search}&api_key=${API_KEY}`)
//                 const info = data.map(el => {
//                     return {
//                         id: el.id,
//                         image: el.reference_image_id,
//                         name: el.name,
//                         temperament: el.temperament,
//                         weight: el.weight.metric,
//                         height: el.height.metric,
//                         life_span: el.life_span,
//                     }
//                 });

//             res.status(200).json(info)

//         } else {
//             const { data } = await axios.get(`${END_POINT}`)
//             const info = data.map(el => {
//                 return {
//                     id: el.id,
//                     image: el.image.url,
//                     name: el.name,
//                     temperament: el.temperament,
//                     weight: el.weight.metric,
//                     height: el.height.metric,
//                     life_span: el.life_span,
//                 }
//             });

//             res.status(200).json(info)

//         }

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };