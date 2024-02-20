export const processOrder = /* GraphQL */ `
  mutation ProcessOrder($input: ProcessOrderInput!) {
    processOrder(input: $input)
  }
`;

export const createDish = /* GraphQL */ `
  mutation CreateDish(
    $input: CreateDishInput!
    $condition: ModelDishConditionInput
  ) {
    createDish(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          dish_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateDish = /* GraphQL */ `
  mutation UpdateDish(
    $input: UpdateDishInput!
    $condition: ModelDishConditionInput
  ) {
    updateDish(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          dish_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteDish = /* GraphQL */ `
  mutation DeleteDish(
    $input: DeleteDishInput!
    $condition: ModelDishConditionInput
  ) {
    deleteDish(input: $input, condition: $condition) {
      id
      title
      description
      image
      author
      featured
      price
      orders {
        items {
          id
          dish_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDishOrder = /* GraphQL */ `
  mutation CreateDishOrder(
    $input: CreateDishOrderInput!
    $condition: ModelDishOrderConditionInput
  ) {
    createDishOrder(input: $input, condition: $condition) {
      id
      dish_id
      order_id
      order {
        id
        user
        date
        total
        dishes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      dish {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateDishOrder = /* GraphQL */ `
  mutation UpdateDishOrder(
    $input: UpdateDishOrderInput!
    $condition: ModelDishOrderConditionInput
  ) {
    updateDishOrder(input: $input, condition: $condition) {
      id
      dish_id
      order_id
      order {
        id
        user
        date
        total
        dishes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      dish {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteDishOrder = /* GraphQL */ `
  mutation DeleteDishOrder(
    $input: DeleteDishOrderInput!
    $condition: ModelDishOrderConditionInput
  ) {
    deleteDishOrder(input: $input, condition: $condition) {
      id
      dish_id
      order_id
      order {
        id
        user
        date
        total
        dishes {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      dish {
        id
        title
        description
        image
        author
        featured
        price
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      dishes {
        items {
          id
          dish_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      dishes {
        items {
          id
          dish_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user
      date
      total
      dishes {
        items {
          id
          dish_id
          order_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
