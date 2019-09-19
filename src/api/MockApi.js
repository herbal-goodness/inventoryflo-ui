function mockStore() {
	return {
		products: [
			{
				type: '',
				image: '',
				unitSku: '',
				caseSku: '',
				shortName: '',
				longName: '',
				description: '',
				category: '',
				copacker: '',
				certification: [],
			},
		],
		contacts: [{}],
		warehouses: [
			{
				name: 'E-Fulfillment Warehouse',
				address: {
					line1: '2150 South Central',
					line2: '',
					city: 'McKinney',
					state: 'Texas',
					postal: '12345',
					country: 'USA',
				},
				phone: 1234567890,
				email: 'efu@ware.house',
			},
			{
				name: 'Davidsons Warehouse',
				address: {
					line1: '30 Rock',
					line2: '',
					city: 'New York',
					state: 'New York',
					postal: '23456',
					country: 'USA',
				},
				phone: 2345678901,
				email: 'dav@ware.house',
			},
			{
				name: 'Nutra Science Warehouse',
				address: {
					line1: '8 Infinite Loop',
					line2: '',
					city: 'Seattle',
					state: 'Washington',
					postal: '34567',
					country: 'USA',
				},
				phone: 3456789012,
				email: 'nut@ware.house',
			},
		],
		orders: [],
		transfers: [],
		adjustments: [],
	};
}

function struct() {
	store = {
		products: [
			{
				type: '',
				imageUrl: '',
				unitSku: '',
				caseSku: '',
				shortName: '',
				longName: '',
				description: '',
				category: '',
				copacker: '',
				certification: [],
			},
		],
		contacts: [
			{
				type: '',
				contact: {
					prefix: '',
					firstName: '',
					lastName: '',
					email: '',
					workPhone: 0,
					mobilePhone: 0,
					address: {
						line1: '',
						state: '',
						country: '',
					},
				},
				companyName: '',
				website: '',
				leadTime: 0,
				payment: {
					bankName: '',
					accountNumber: 0,
				},
			},
		],
		warehouses: [
			{
				name: '',
				address: {
					line1: '',
					line2: '',
					city: '',
					state: '',
					postal: '',
					country: '',
				},
				phone: 0,
				email: '',
			},
		],
		purchaseOrders: [
			{
				poId: '',
				date: '',
				folderLink: '',
				vendor: '',
				purchaseOrder: [
					{
						product: '',
						quantity: 0,
						toWarehouse: '',
						fromWarehouse: '',
					},
				],
			},
		],
		transfers: [
			{
				fromWarehouse: '',
				toWarehouse: '',
				date: '',
				shipmentNumber: '',
				packingSlipUrl: '',
				transfer: [
					{
						product: '',
						quantityPacked: 0,
						quantityDelivered: 0,
						shipmentNumber: '',
						status: '',
					},
				],
				note: '',
			},
		],
		adjustments: [
			{
				mode: '',
				referenceId: '',
				date: '',
				reason: '',
				warehouseId: '',
				adjustment: [
					{
						imageUrl: '',
						itemDetails: '',
						stockOnHand: '',
						newQuantityOnHand: '',
						quantityAdjusment: '',
					},
				],
			},
		],
	};
}

export default mockStore;
