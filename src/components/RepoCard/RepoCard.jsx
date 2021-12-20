import './repoCard.css';

function RepoCard({ repo }) {
  return (
    <div className='repo-card'>
      <div className="full-name">{repo.full_name}</div>
      <div className="description">{repo.description}</div>
      <div className="small-text-wrapper">
        {(repo.language)?(<div className="language">{repo.language}</div>):""}
        <div className="updated_at">Updated on {new Date(repo.updated_at).toLocaleDateString()}</div>
      </div>
    </div>
  );
}

export default RepoCard;