import { userRepository } from "../repositories/user.repository";
import { UserModel } from "../models/user.model";
import type { User } from "../types/user.type";

export const userService = {
  getAll(): UserModel[] {
    // Memanggil findAll langsung karena repository sudah memetakan data ke UserModel
    return userRepository.findAll();
  },

  create(user: User) {
    // Menambahkan validasi sederhana
    if (!user.name || !user.role) {
      throw new Error("Name and role are required");
    }
    userRepository.create(user);
  },

  update(id: number, user: User) {
    userRepository.update(id, user);
  },

  delete(id: number) {
    // Memanggil metode delete dari userRepository
    userRepository.delete(id);
  }
};