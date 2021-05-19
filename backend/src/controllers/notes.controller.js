const notesCtrl = {};

const Note = require('../models/Note');

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes)
} 

notesCtrl.createNote = async (req, res) => { 
    const { titulo, contenido, dato, autor } = (req.body);
    const newNote = new Note({
        titulo,
        contenido,
        dato,
        autor
    });
    await newNote.save();
    res.json({message: 'Note saved'});
}

notesCtrl.getNote = async (req, res) => {
    const note = await Note.findById(req.params.id);
    res.json(note)
}
notesCtrl.updateNote = async (req, res) => {
    const {titulo, contenido, autor} = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        titulo,
        contenido,
        autor 

    });
    res.json({message: 'Note update'})
}
notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'Note eliminated'})
}

module.exports = notesCtrl;