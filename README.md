ECOMMERCE API IN NODEJS AND MONGODB

YOU CAN ACCESS THE RUNNING API HERE(please run it on postman for best experience): http://ec2-54-164-160-81.compute-1.amazonaws.com

ENDPOINTS:

    a. GET /products: To get all products
    
    b. POST /products/create: To create a product
    
    c. DELETE /products/:id: to delete a product with the given id
    
    d. POST  /products/:id/update_quantity/?number=<value>: to update the quantity of a product

SETTING UP THE API:
    a. Run the following line of code:
        git clone https://github.com/shivamk001/ECommerce_API_Nodejs_MongoDB.git
        cd ECommerce_API_Nodejs_MongoDB
        npm install
        npm i nodemon -g

    b. Run in development mode:
        npm run start(please ensure that mongodb is running in your system)

    c. Run in production mode:
        Create a .env file in the ECommerce_API_Nodejs_MongoDB folder which contains the following key value pairs:
            1. PORT=<PORT_VALUE>
            2. MONGO_CONNECTION_STRING=<CONNECTION_STRING_VALUE>
        
        Then run the following depending on your OS:
            Windows:
                npm run production_windows

                OR

            Linux:
                npm run production
