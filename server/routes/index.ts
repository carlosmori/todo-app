const routes = async ({expressApp}:any) => {
    await expressApp.get("/", async (req:any,res:any) => {
        res.send({message: "Hello Carl"})
    })
}

export {routes};