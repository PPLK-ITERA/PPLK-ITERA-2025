<form action="{{ route('profile.edit') }}" method="post">
    @csrf
    <input type="text" name="linkedinURL" value="{{ $user->linkedin_url }}">
    <input type="text" name="instaURL" value="{{ $user->instagram_url }}">
    <input type="file" name="photo">
    <button type="submit"></button>
</form>
