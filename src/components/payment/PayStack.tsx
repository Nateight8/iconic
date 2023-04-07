import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";
import Layout from "./Layout";
import { usePaystackPayment } from "react-paystack";
import { Formik, Form, Field } from "formik";
import { UseSessionOptions, useSession } from "next-auth/react";

type Props = {};

function PayStack({}: Props) {
  const [amount, setAmount] = React.useState("");

  const options: UseSessionOptions<boolean> = {
    required: false,
  };

  const { data: session } = useSession(options);

  type PaymentReference = {
    reference: string;
    trans: string;
    status: string;
    message: string;
    transaction: string;
  };

  const onSuccess = (reference: PaymentReference) => {
    console.log(reference);
  };

  const onPaymentSuccess = () => {
    alert("payment successful");
  };

  const onClose = () => {
    console.log("closed");
    alert("Do you want to exit payment?");
  };

  const config = {
    reference: new Date().getTime().toString(),
    email: session?.user?.email ?? "",
    amount: parseInt(amount) * 100,
    publicKey: "pk_test_b4c92c66e786e81550970b0612644f065537f464",
  };

  const initializePayment = usePaystackPayment(config);
  return (
    <Layout>
      <Formik
        initialValues={{ amount: "" }}
        onSubmit={(values, actions) => {
          setAmount(values.amount);
          console.log(values);
          initializePayment(onPaymentSuccess, onClose);
          //   actions.setSubmitting(false);
        }}
      >
        {({}) => {
          return (
            <Form>
              <Field
                name="amount"
                as={TextField}
                label="Enter amount"
                type="number"
                variant="outlined"
                fullWidth
                size="small"
                InputProps={{
                  disableUnderline: true,
                }}
              />

              <Button
                type="submit"
                sx={{ marginY: "1rem" }}
                variant="contained"
                size="small"
                fullWidth
              >
                Proceed
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Layout>
  );
}

export default PayStack;
