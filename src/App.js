import React from "react";
import Header from "./components/header";
import { Container, Grid, Box, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import Textfield from "./components/formUI/Textfield";
import Select from "./components/formUI/Select";
import DateTimePicker from "./components/formUI/DateTimePicker";
import countries from "./countries.json";
import * as Yup from "yup";
import "./App.css";
const INITIAL_FORM_STATE = {
	firstName: "",
	lastName: "",
	email: "",
	phone: "",
	addressLine1: "",
	addressLine2: "",
	city: "",
	state: "",
	country: "",
	arrivalDate: "",
	departureDate: "",
	message: "",
};
const FORM_VALIDATION = Yup.object().shape({
	firstName: Yup.string().required("First Name is required"),
	lastName: Yup.string().required("Last Name cannbot be left blank"),
	email: Yup.string()
		.email("Invalid email ID")
		.required("You must provide a valid email id"),
	phone: Yup.number()
		.integer()
		.typeError("Please enter a valid Phone Number")
		.required("You cannot left blank phone number"),
	addressLine1: Yup.string().required("This field cannot  left empty"),
	addressLine2: Yup.string(),
	city: Yup.string().required("You must provide your city"),
	state: Yup.string().required("This field cannot  left empty"),
	country: Yup.string().required("This field cannot  left empty"),
	arrivalDate: Yup.date().required("Required"),
	departureDate: Yup.date().required("Required"),
	message: Yup.string(),
});
function App() {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Header />
			</Grid>
			<Grid item xs={12}>
				<Container maxWidth='md'>
					<Box sx={{ mt: 8, mb: 5 }}>
						<Formik
							initialValues={{ ...INITIAL_FORM_STATE }}
							validationSchema={FORM_VALIDATION}
							onSubmit={(values) => {
								console.log(values);
							}}
						>
							<Form>
								<Grid container spacing={2}>
									<Grid item xs={12}>
										<Typography>Your details</Typography>
									</Grid>
									<Grid item xs={6}>
										<Textfield name='firstName' label='First Name' />
									</Grid>
									<Grid item xs={6}>
										<Textfield name='lastName' label='Last Name' />
									</Grid>
									<Grid item xs={12}>
										<Textfield name='email' label='Email' />
									</Grid>
									<Grid item xs={12}>
										<Textfield name='phone' label='Phone Number' />
									</Grid>
									<Grid item xs={12}>
										<Typography>Address</Typography>
									</Grid>
									<Grid item xs={12}>
										<Textfield
											name='addressLine1'
											label='Address Line Number 1'
										/>
									</Grid>
									<Grid item xs={12}>
										<Textfield
											name='addressLine2'
											label='Address Line Number 2'
										/>
									</Grid>
									<Grid item xs={6}>
										<Textfield name='city' label='City' />
									</Grid>
									<Grid item xs={6}>
										<Textfield name='state' label='State' />
									</Grid>
									<Grid item xs={12}>
										<Select
											name='country'
											label='country'
											options={countries}
										/>
									</Grid>
									<Grid item xs={12}>
										<Typography>Booking Information</Typography>
									</Grid>
									<Grid item xs={6}>
										<DateTimePicker name='arrivalDate' label='Arrival Date' />
									</Grid>
									<Grid item xs={6}>
										<DateTimePicker
											name='departureDate'
											label='Departure Date'
										/>
									</Grid>
									<Grid item xs={12}>
										<Textfield
											name='message'
											label='Message'
											multiline={true}
											rows={4}
										/>
									</Grid>
								</Grid>
							</Form>
						</Formik>
					</Box>
				</Container>
			</Grid>
		</Grid>
	);
}

export default App;
