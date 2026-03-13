import { Injectable, inject } from '@angular/core';
import { Firestore, collection, getCountFromServer, query, where, getDocs ,orderBy, limit, doc, deleteDoc, updateDoc} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminDashboardService {

  private firestore: Firestore = inject(Firestore);

  async getCruiseCount() {
    const coll = collection(this.firestore, 'cruises');
    const snapshot = await getCountFromServer(coll);
    return snapshot.data().count;
  }

  async getTotalUsers() {
    const coll = collection(this.firestore, 'users');
    const snapshot = await getCountFromServer(coll);
    return snapshot.data().count;
  }

  async getTotalBookings() {
    const coll = collection(this.firestore, 'bookings');
    const snapshot = await getCountFromServer(coll);
    return snapshot.data().count;
  }

  async getTotalRevenue() {
  const bookingsRef = collection(this.firestore, 'bookings');
  const confirmedQuery = query(bookingsRef, where('status', '==', 'Confirmed'));

  const snapshot = await getDocs(confirmedQuery);

  let total = 0;

  snapshot.forEach((doc) => {
    const data: any = doc.data();
    total += Number(data.totalAmount) || 0;
  });

  return Number(total.toFixed(2));
}
async getRecentBookings() {

  const bookingsRef = collection(this.firestore, 'bookings');

  const q = query(
    bookingsRef,
    orderBy('createdAt', 'desc'),
    limit(5)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => {
    const data: any = doc.data();

    return {
      id: doc.id,
      passenger:
        data.passengers?.[0]?.firstName + ' ' +
        data.passengers?.[0]?.lastName,

      cruise: data.cruise?.title,

      amount: data.totalAmount,

      status: data.status,

      // reference: data.reference
    };
  });

}
async getCruiseStatus() {

  const cruisesRef = collection(this.firestore, 'cruises');

  const snapshot = await getDocs(cruisesRef);

  const today = new Date();

  let completed = 0;
  let upcoming = 0;

  snapshot.docs.forEach(doc => {

    const data: any = doc.data();

    if (!data.date) return;

    const parts = data.date.split('-'); 
    const cruiseDate = new Date(parts[2], parts[1]-1, parts[0]);

    if (cruiseDate < today) {
      completed++;
    } else {
      upcoming++;
    }

  });

  return {
    completed,
    upcoming,
    total: snapshot.size
  };

}
async getOfferStatus() {

  const offersRef = collection(this.firestore, 'offers');
  const snapshot = await getDocs(offersRef);

  const today = new Date();

  let active = 0;
  let expired = 0;
  let inactive = 0;

  snapshot.docs.forEach(doc => {

    const data: any = doc.data();

    const expiry = data.expiryDate?.toDate();

    if (!data.isActive) {
      inactive++;
    }
    else if (expiry && expiry < today) {
      expired++;
    }
    else {
      active++;
    }

  });

  return {
    active,
    expired,
    inactive
  };

}
async getCheckinSummary() {

  const bookingsRef = collection(this.firestore, 'bookings');
  const snapshot = await getDocs(bookingsRef);

  let confirmed = 0;
  let pending = 0;
  let cancelled = 0;

  snapshot.docs.forEach(doc => {

    const data: any = doc.data();

    if (data.status === 'Confirmed') {
      confirmed++;
    }
    else if (data.status === 'Pending') {
      pending++;
    }
    else if (data.status === 'Cancelled') {
      cancelled++;
    }

  });

  return {
    confirmed,
    pending,
    cancelled
  };

}
async getAllCruises() {

  const cruisesRef = collection(this.firestore, 'cruises');
  const snapshot = await getDocs(cruisesRef);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

}
async deleteCruise(id: string) {

  const cruiseRef = doc(this.firestore, 'cruises', id);
  await deleteDoc(cruiseRef);

}
async updateCruiseStatus(id: string, status: string) {

  const cruiseRef = doc(this.firestore, 'cruises', id);

  await updateDoc(cruiseRef, {
    status: status
  });

}
}