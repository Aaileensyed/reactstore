import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listDishes } from "../api/queries";
import { processOrder } from "../api/mutations";

const DishContext = React.createContext();

const DishProvider = ({ children }) => {
  const [dishes, setDishes] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDishes();
  }, []);

  const checkout = async (orderDetails) => {
    const payload = {
      id: uuidv4(),
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(err);
    }
  };

  const fetchDishes = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listDishes,
        authMode: "API_KEY"
      });
      const dishes = data.listDishes.items;
      const featured = dishes.filter((dish) => {
        return !!dish.featured;
      });
      setDishes(dishes);
      setFeatured(featured);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DishContext.Provider value={{ dishes, featured, loading, checkout }}>
      {children}
    </DishContext.Provider>
  );
};

export { DishContext, DishProvider };
