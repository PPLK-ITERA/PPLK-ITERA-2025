<form action="mading/store" method="post">
    @csrf
    <input type="text" name="tugas_id[]" value="2">
    <input type="text" name="jawaban[]" value="test">

    <input type="text" name="tugas_id[]" value="3">
    <input type="text" name="jawaban[]" value="asdasdas">

    <button type="submit">"jawab"

    </button>
</form>