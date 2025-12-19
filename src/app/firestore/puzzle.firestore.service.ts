import {Injectable} from '@angular/core';
import {doc, Firestore, getDoc, increment, setDoc, updateDoc} from '@angular/fire/firestore';
import {AuthService} from '../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PuzzleFirestoreService {
  constructor(private firestore: Firestore, private authService: AuthService) {
  }

  async getCurrentPuzzle(): Promise<number> {
    const user = this.authService.currentUser()
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    const userSnap = await getDoc(userDocRef);

    if (userSnap.exists()) {
      const data = userSnap.data();
      return data['currentPuzzle'] ?? 0;
    } else {
      // Create document if it doesn't exist.
      await setDoc(userDocRef, {currentPuzzle: 0})
      return 0;
    }
  }

  async incrementCurrentPuzzle(): Promise<void> {
    const user = this.authService.currentUser()
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    await updateDoc(userDocRef, {currentPuzzle: increment(1)});
  }
}
