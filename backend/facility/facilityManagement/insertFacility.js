const CreditHandlingNormal = require("/home/azureuser/Test 1/user/credit/creditHandlingNormal");
async function insertFacility(client,type, newId, title, description, facImageLink , addedTime , long, lat, adderId){
    const HandleCredit = new CreditHandlingNormal()
    var FacilityInfo =  {
        "facilityType": type,
        "facility_status": "normal",
        "facilityTitle": title,
        "facilityDescription": description,
        "facilityImageLink": facImageLink,
        "facilityOverallRate": 0,
        "numberOfRates": 0,
        "timeAdded": addedTime,
        "longitude": long,
        "latitude": lat
    }
    var insertInfo ={
        "_id": newId,
        "facility":FacilityInfo,
        "ratedUser": [],
        "reviews": [],
        "adderID": adderId
    }
    if(!type && !newId && !title && !description &&!facImageLink && !timeAdded && !adderId){
        return {"result":"unsuccesful add with missing field"}
    }
    if(type !="" && type!= "entertainments" && type!="studys" && type!="posts" &&type!="restaurants" && type!="entertainmentstest"){
        return {"result":"unsuccesful add with invalid input"}
    }
    else{
        try{
            await client.db("Help!Db").collection(type).insertOne(insertInfo); 
        }
        catch(err){}
        await HandleCredit.creditHandlingNormal(client, "addFacility", adderId);
    }
     
    // // return "done"
}

module.exports = insertFacility;
