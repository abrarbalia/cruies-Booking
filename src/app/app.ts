import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './shared/components/navbar/navbar';
import { Footer } from "./shared/components/footer/footer";
import { MyBooking } from './features/my-booking/my-booking';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer,MyBooking],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
