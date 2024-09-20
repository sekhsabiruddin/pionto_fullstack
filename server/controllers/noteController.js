const { Note } = require("../models/note");

// ====================Get all notes====================
const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.findAll();
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ================Create a new note================
const createNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    const newNote = await Note.create({ title, content });
    res.status(201).json({
      message: "Note created successfully!",
      note: newNote,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ===========================Update  note============================
const updateNote = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const note = await Note.findByPk(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    note.title = title || note.title;
    note.content = content || note.content;
    await note.save();
    res.json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ============================Delete a note========================
const deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findByPk(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    await note.destroy();
    res.json({ message: "Note deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
};
