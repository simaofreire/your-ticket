import mongoose from 'mongoose';

export async function connect() {
	try {
		await mongoose.connect('mongodb+srv://simaofreire:pkMNeeWFI7t5ahop@cluster0.tcguoc4.mongodb.net/your-ticket');
    console.log('>>> Database is connected');
    
	} catch (error) {
		console.log(error);
	}
}
