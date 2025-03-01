const mongoose=require('mongoose')
const URL="mongodb+srv://durgeshsharma:durgesh123@dicdatabase.igctqhh.mongodb.net/bookomega?retryWrites=true&w=majority"

const mongoDB=async()=>{
    // await mongoose.connect(URL,{useNewURLParser:true},async(err,result)=>{
    //  if(err)console.log(err);
    //  else{
    //  console.log("connected");
    //  const fetched_data=await mongoose.connection.db.collection("products");
    //  fetched_data.find({}).toArray( function(err,data){
    //     if(err)console.log(err);
    //     else console.log(data);
    //  });
    //  }
    // });

// await mongoose.connect(URL)
// .then(async()=>{
// console.log("connected");
// const fetched_data=await mongoose.connection.db.collection("test");
// fetched_data.find({}).toArray( function(err,data){
//     if(err)console.log(err);
//     else console.log(data);
//  });
// })
// .catch((e)=>{console.log(e)})

await mongoose.connect(URL)
.then(async () => {
  console.log("connected");

  const fetchedData = await mongoose.connection.db.collection("users");

  fetchedData.find({}).toArray((err, data) => {
    if (err) {
      console.error("Error retrieving data:", err);
    } else {
      console.log(data);
    }
  });
})

.catch((e) => {
  console.error("Error connecting to MongoDB:", e);
});

}




module.exports=mongoDB();